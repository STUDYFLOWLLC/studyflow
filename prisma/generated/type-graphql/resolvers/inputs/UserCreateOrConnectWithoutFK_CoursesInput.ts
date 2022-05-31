import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_CoursesInput } from "../inputs/UserCreateWithoutFK_CoursesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_CoursesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_CoursesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_CoursesInput;
}
