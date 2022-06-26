import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutTermInput } from "../inputs/SchoolCreateOrConnectWithoutTermInput";
import { SchoolCreateWithoutTermInput } from "../inputs/SchoolCreateWithoutTermInput";
import { SchoolUpdateWithoutTermInput } from "../inputs/SchoolUpdateWithoutTermInput";
import { SchoolUpsertWithoutTermInput } from "../inputs/SchoolUpsertWithoutTermInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolUpdateOneWithoutTermInput", {
  isAbstract: true
})
export class SchoolUpdateOneWithoutTermInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutTermInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutTermInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpsertWithoutTermInput, {
    nullable: true
  })
  upsert?: SchoolUpsertWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateWithoutTermInput, {
    nullable: true
  })
  update?: SchoolUpdateWithoutTermInput | undefined;
}
