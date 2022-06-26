import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_SchoolInput } from "../inputs/UserCreateWithoutFK_SchoolInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_SchoolInput;
}
