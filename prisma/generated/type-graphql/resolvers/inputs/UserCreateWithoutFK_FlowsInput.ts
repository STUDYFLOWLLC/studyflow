import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateNestedManyWithoutFK_UserInput } from "../inputs/CourseOnUserCreateNestedManyWithoutFK_UserInput";
import { FlashCardStackCreateNestedManyWithoutFK_UserInput } from "../inputs/FlashCardStackCreateNestedManyWithoutFK_UserInput";
import { FlowTagCreateNestedManyWithoutFK_UserInput } from "../inputs/FlowTagCreateNestedManyWithoutFK_UserInput";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("UserCreateWithoutFK_FlowsInput", {
  isAbstract: true
})
export class UserCreateWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  SetupComplete?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

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

  @TypeGraphQL.Field(_type => CourseOnUserCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_Courses?: CourseOnUserCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlowTags?: FlowTagCreateNestedManyWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateNestedManyWithoutFK_UserInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackCreateNestedManyWithoutFK_UserInput | undefined;
}
