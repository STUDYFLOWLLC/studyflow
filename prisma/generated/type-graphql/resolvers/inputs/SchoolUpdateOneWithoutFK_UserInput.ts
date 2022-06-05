import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_UserInput } from "../inputs/SchoolCreateOrConnectWithoutFK_UserInput";
import { SchoolCreateWithoutFK_UserInput } from "../inputs/SchoolCreateWithoutFK_UserInput";
import { SchoolUpdateWithoutFK_UserInput } from "../inputs/SchoolUpdateWithoutFK_UserInput";
import { SchoolUpsertWithoutFK_UserInput } from "../inputs/SchoolUpsertWithoutFK_UserInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolUpdateOneWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolUpdateOneWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_UserInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_UserInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpsertWithoutFK_UserInput, {
    nullable: true
  })
  upsert?: SchoolUpsertWithoutFK_UserInput | undefined;

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

  @TypeGraphQL.Field(_type => SchoolUpdateWithoutFK_UserInput, {
    nullable: true
  })
  update?: SchoolUpdateWithoutFK_UserInput | undefined;
}
