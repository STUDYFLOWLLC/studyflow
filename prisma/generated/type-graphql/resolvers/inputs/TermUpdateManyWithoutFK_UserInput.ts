import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_UserInputEnvelope } from "../inputs/TermCreateManyFK_UserInputEnvelope";
import { TermCreateOrConnectWithoutFK_UserInput } from "../inputs/TermCreateOrConnectWithoutFK_UserInput";
import { TermCreateWithoutFK_UserInput } from "../inputs/TermCreateWithoutFK_UserInput";
import { TermScalarWhereInput } from "../inputs/TermScalarWhereInput";
import { TermUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/TermUpdateManyWithWhereWithoutFK_UserInput";
import { TermUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/TermUpdateWithWhereUniqueWithoutFK_UserInput";
import { TermUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/TermUpsertWithWhereUniqueWithoutFK_UserInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class TermUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [TermCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: TermCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: TermUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => TermCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: TermCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  set?: TermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  delete?: TermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermWhereUniqueInput], {
    nullable: true
  })
  connect?: TermWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: TermUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: TermUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TermScalarWhereInput[] | undefined;
}
