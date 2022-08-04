import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_SchoolInputEnvelope } from "../inputs/TermCreateManyFK_SchoolInputEnvelope";
import { TermCreateOrConnectWithoutFK_SchoolInput } from "../inputs/TermCreateOrConnectWithoutFK_SchoolInput";
import { TermCreateWithoutFK_SchoolInput } from "../inputs/TermCreateWithoutFK_SchoolInput";
import { TermScalarWhereInput } from "../inputs/TermScalarWhereInput";
import { TermUpdateManyWithWhereWithoutFK_SchoolInput } from "../inputs/TermUpdateManyWithWhereWithoutFK_SchoolInput";
import { TermUpdateWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/TermUpdateWithWhereUniqueWithoutFK_SchoolInput";
import { TermUpsertWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/TermUpsertWithWhereUniqueWithoutFK_SchoolInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpdateManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class TermUpdateManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [TermCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: TermCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermUpsertWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  upsert?: TermUpsertWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => TermCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: TermCreateManyFK_SchoolInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TermUpdateWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  update?: TermUpdateWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermUpdateManyWithWhereWithoutFK_SchoolInput], {
    nullable: true
  })
  updateMany?: TermUpdateManyWithWhereWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TermScalarWhereInput[] | undefined;
}
