import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedManyWithoutCreatedByUserInput } from "../inputs/FlowCreateNestedManyWithoutCreatedByUserInput";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UID?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DisplayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutCreatedByUserInput, {
    nullable: true
  })
  Flows?: FlowCreateNestedManyWithoutCreatedByUserInput | undefined;
}
