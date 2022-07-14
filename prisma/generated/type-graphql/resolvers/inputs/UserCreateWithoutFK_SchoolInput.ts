import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateNestedManyWithoutFK_UserInput } from "../inputs/FlowViewCreateNestedManyWithoutFK_UserInput";
import { SettingCreateNestedOneWithoutFK_UserInput } from "../inputs/SettingCreateNestedOneWithoutFK_UserInput";
import { TaskCreateNestedManyWithoutFK_UserInput } from "../inputs/TaskCreateNestedManyWithoutFK_UserInput";
import { TermCreateNestedManyWithoutFK_UserInput } from "../inputs/TermCreateNestedManyWithoutFK_UserInput";
import { SetupStep } from "../../enums/SetupStep";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("UserCreateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserCreateWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastOpened?: Date | undefined;

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  SetupStep?: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Terms?: TermCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Task?: TaskCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SettingCreateNestedOneWithoutFK_UserInput, {
    nullable: true
  })
  FK_Settings?: SettingCreateNestedOneWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewCreateNestedManyWithoutFK_UserInput | undefined;
}
