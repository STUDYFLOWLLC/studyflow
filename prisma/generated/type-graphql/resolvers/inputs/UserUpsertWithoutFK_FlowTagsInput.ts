import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowTagsInput } from "../inputs/UserCreateWithoutFK_FlowTagsInput";
import { UserUpdateWithoutFK_FlowTagsInput } from "../inputs/UserUpdateWithoutFK_FlowTagsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FlowTagsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FlowTagsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowTagsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FlowTagsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowTagsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowTagsInput;
}
