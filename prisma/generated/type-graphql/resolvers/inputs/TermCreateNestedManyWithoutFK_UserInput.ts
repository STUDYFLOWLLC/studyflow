import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_UserInputEnvelope } from "../inputs/TermCreateManyFK_UserInputEnvelope";
import { TermCreateOrConnectWithoutFK_UserInput } from "../inputs/TermCreateOrConnectWithoutFK_UserInput";
import { TermCreateWithoutFK_UserInput } from "../inputs/TermCreateWithoutFK_UserInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class TermCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [TermCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: TermCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => TermCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: TermCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  connect?: TermWhereUniqueInput[] | undefined;
}
