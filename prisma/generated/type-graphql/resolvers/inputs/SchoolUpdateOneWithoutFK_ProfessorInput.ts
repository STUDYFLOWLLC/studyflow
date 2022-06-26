import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/SchoolCreateOrConnectWithoutFK_ProfessorInput";
import { SchoolCreateWithoutFK_ProfessorInput } from "../inputs/SchoolCreateWithoutFK_ProfessorInput";
import { SchoolUpdateWithoutFK_ProfessorInput } from "../inputs/SchoolUpdateWithoutFK_ProfessorInput";
import { SchoolUpsertWithoutFK_ProfessorInput } from "../inputs/SchoolUpsertWithoutFK_ProfessorInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolUpdateOneWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class SchoolUpdateOneWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_ProfessorInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_ProfessorInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpsertWithoutFK_ProfessorInput, {
    nullable: true
  })
  upsert?: SchoolUpsertWithoutFK_ProfessorInput | undefined;

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

  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_ProfessorInput, {
    nullable: true
  })
  update?: SchoolUpdateWithoutFK_ProfessorInput | undefined;
}
