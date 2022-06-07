import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_SchoolInput } from "../inputs/UserCreateWithoutFK_SchoolInput";
import { UserUpdateWithoutFK_SchoolInput } from "../inputs/UserUpdateWithoutFK_SchoolInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_SchoolInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_SchoolInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_SchoolInput;
}
